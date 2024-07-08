// routes/court.js
const express = require('express');
const router = express.Router();
// const  { Court } = require('../models');
const { Court, State } = require('../models');

const authenticateJWT = require('../middleware/authenticateJWT');
router.post('/courts', async (req, res) => {
    try {
        const { stateName, ...courtData } = req.body;
        const state = await State.findOne({ where: { stateName } });
        if (!state) {
            return res.status(400).json({ error: 'Invalid state' });
        }
        console.log(stateName);
        const court = await Court.create({ ...courtData, stateId: state.id });
        res.status(201).json(court);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// router.post('/courts',authenticateJWT,async (req, res) => {
//     try {
//         // if (req.user.role !== 'admin') {
//         //     console.log(req.user.role);
//         //     return res.sendStatus(403);
//         // }
//         // console.log("hiiii");
//         const court = await Court.create(req.body); // Create a new court entry
//         // console.log("hiiii");
//         res.status(201).json(court);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });



router.get('/courts', async (req, res) => {
    try {
        // Find all courts
        const courts = await Court.findAll();

        // Fetch state names for each court
        const results = await Promise.all(courts.map(async (court) => {
            const courtData = court.get({ plain: true });

            // Find the state by stateId
            const state = await State.findByPk(court.stateId, {
                attributes: ['stateName']
            });

            if (state) {
                courtData.stateName = state.stateName;
            } else {
                courtData.stateName = null;
            }

            delete courtData.stateId; // Optionally remove the stateId if you don't want to include it
            return courtData;
        }));

        res.status(200).json(results);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// router.get('/courts/search', async (req, res) => {
//     // if (req.user.role !== 'admin') {
//     //     console.log(req.user.role);
//     //     return res.sendStatus(403);
//     // }
//     const { courtName, state, courtType } = req.query;
//     try {
//         const court = await Court.findOne({ 
//             where: { 
//                 courtName, 
//                 state, 
//                 courtType 
//             } 
//         });
//         if (court) {
//             res.status(200).json(court);
//         } else {
//             res.status(404).json({ error: 'Court not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });
router.get('/courts/search', async (req, res) => {
    const { courtName, courtType } = req.query;

    try {
        // Find the court by courtName and courtType
        const court = await Court.findOne({
            where: {
                courtName,
                courtType
            }
        });

        if (court) {
            // Get the stateId from the found court
            const { stateId } = court;

            // Find the state by stateId
            const state = await State.findByPk(stateId, {
                attributes: ['stateName']
            });

            if (state) {
                // Build the new JSON result
                const courtData = court.get({ plain: true });
                courtData.stateName = state.stateName;
                delete courtData.stateId; // Optionally remove the stateId if you don't want to include it

                res.status(200).json(courtData);
            } else {
                res.status(404).json({ error: 'State not found' });
            }
        } else {
            res.status(404).json({ error: 'Court not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/states', async (req, res) => {
    try {
        // Fetch all state names
        const states = await State.findAll({
            attributes: ['stateName'],
            order: [['stateName', 'ASC']]
        });

        // Extract state names and filter unique values
        const stateNames = states.map(state => state.stateName);
        const uniqueStateNames = [...new Set(stateNames)];

        res.status(200).json(uniqueStateNames);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});















router.put('/courts/:id', async (req, res) => {
    try {
        const court = await Court.findByPk(req.params.id);
        if (court) {
            await court.update(req.body);
            res.status(200).json(court);
        } else {
            res.status(404).json({ error: 'Court not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// router.delete('/courts/:id',  async (req, res) => {
//     try {
//         const court = await Court.findByPk(req.params.id);
//         if (court) {
//             await court.destroy();
//             // res.json({"message":"Court Deleted Successfully"});
//             res.status(204).json({message:"Court Deleted Successfully"});
//         } else {
//             res.status(404).json({ error: 'Court not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });
router.delete('/courts/:id', authenticateJWT,async (req, res) => {
    try {
        const court = await Court.findByPk(req.params.id);
        if (court) {
            await court.destroy();
            res.status(200).json({ message: "Court Deleted Successfully" }); // Use 200 OK
        } else {
            res.status(404).json({ error: 'Court not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;
