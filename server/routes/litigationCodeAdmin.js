const express = require('express');
const router = express.Router();
const  { LitigationCode } = require('../models');
const authenticateJWT = require('../middleware/authenticateJWT');

router.post('/',async (req, res) => {
    try {
        // if (req.user.role !== 'admin') {
        //     console.log(req.user.role);
        //     return res.sendStatus(403);
        // }h
        // console.log("hiiii");
        const litigationCode = await LitigationCode.create(req.body); // Create a new litigationCode entry
        // console.log("hiiii");
        res.status(201).json(litigationCode);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// router.get('/litigationCodes/states', async (req, res) => {
//     try {
//         const states = await LitigationCode.findAll({
//             attributes: [
//                 [Sequelize.fn('DISTINCT', Sequelize.col('state')), 'state']
//             ],
//             order: [['state', 'ASC']]
//         });
//         res.status(200).json(states.map(state => state.state));
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });


router.get('/', async (req, res) => {
    try {
        // if (req.user.role !== 'admin') {
        //     console.log(req.user.role);
        //     return res.sendStatus(403);
        // }

        const litigationCodes = await LitigationCode.findAll();
        res.status(200).json(litigationCodes);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// router.get('/:id', async (req, res) => {
//     try {
//         const litigationCode = await LitigationCode.findByPk(req.params.id);
//         if (litigationCode) {
            
//             res.status(200).json(litigationCode);
//         } else {
//             res.status(404).json({ error: 'litigationCode not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });
router.get('/search', async (req, res) => {
    const { litigationCode, description } = req.query;
    try {
        const litigationCodeObject = await LitigationCode.findOne({ 
            where: { 
                litigationCode, 
                description 
            } 
        });
        if (litigationCodeObject) {
            res.status(200).json(litigationCodeObject);
        } else {
            res.status(404).json({ error: 'Litigation Code not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const litigationCode = await LitigationCode.findByPk(req.params.id);
        if (litigationCode) {
            await litigationCode.update(req.body);
            res.status(200).json(litigationCode);
        } else {
            res.status(404).json({ error: 'litigationCode not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// router.delete('/litigationCodes/:id',  async (req, res) => {
//     try {
//         const litigationCode = await litigationCode.findByPk(req.params.id);
//         if (litigationCode) {
//             await litigationCode.destroy();
//             // res.json({"message":"litigationCode Deleted Successfully"});
//             res.status(204).json({message:"litigationCode Deleted Successfully"});
//         } else {
//             res.status(404).json({ error: 'litigationCode not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });
router.delete('/:id',async (req, res) => {
    try {
        const litigationCode = await LitigationCode.findByPk(req.params.id);
        if (litigationCode) {
            await litigationCode.destroy();
            res.status(200).json({ message: "litigationCode Deleted Successfully" }); // Use 200 OK
        } else {
            res.status(404).json({ error: 'litigationCode not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;
