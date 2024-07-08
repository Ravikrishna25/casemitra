const express = require('express');
const router = express.Router();
const  { Firm } = require('../models');
const authenticateJWT = require('../middleware/authenticateJWT');

router.post('/',async (req, res) => {
    try {
        // if (req.user.role !== 'admin') {
        //     console.log(req.user.role);
        //     return res.sendStatus(403);
        // }h
        // console.log("hiiii");
        const firm = await Firm.create(req.body); // Create a new firm entry
        // console.log("hiiii");
        res.status(201).json(firm);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// router.get('/firms/states', async (req, res) => {
//     try {
//         const states = await firm.findAll({
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

        const firms = await Firm.findAll();
        res.status(200).json(firms);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
router.get('/search', async (req, res) => {
    const { firmName } = req.query;

    try {
        if (!firmName) {
            return res.status(400).json({ error: 'firmName query parameter is required' });
        }

        const firm = await Firm.findOne({ where: { firmName } });

        if (firm) {
            res.status(200).json(firm);
        } else {
            res.status(404).json({ error: 'firm not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// router.get('/firms/:id', async (req, res) => {
//     try {
//         const firm = await firm.findByPk(req.params.id);
//         if (firm) {
//             res.status(200).json(firm);
//         } else {
//             res.status(404).json({ error: 'firm not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });
// router.get('/search', async (req, res) => {
//     // if (req.user.role !== 'admin') {
//     //     console.log(req.user.role);
//     //     return res.sendStatus(403);
//     // }
//     const { firmName, state, firmType } = req.query;
//     try {
//         const firm = await firm.findOne({ 
//             where: { 
//                 firmName, 
//                 state, 
//                 firmType 
//             } 
//         });
//         if (firm) {
//             res.status(200).json(firm);
//         } else {
//             res.status(404).json({ error: 'firm not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

router.put('/:id', async (req, res) => {
    try {
        const firm = await Firm.findByPk(req.params.id);
        if (firm) {
            await firm.update(req.body);
            res.status(200).json(firm);
        } else {
            res.status(404).json({ error: 'firm not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// router.delete('/firms/:id',  async (req, res) => {
//     try {
//         const firm = await firm.findByPk(req.params.id);
//         if (firm) {
//             await firm.destroy();
//             // res.json({"message":"firm Deleted Successfully"});
//             res.status(204).json({message:"firm Deleted Successfully"});
//         } else {
//             res.status(404).json({ error: 'firm not found' });
//         }
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });
router.delete('/:id',async (req, res) => {
    try {
        const firm = await Firm.findByPk(req.params.id);
        if (firm) {
            await firm.destroy();
            res.status(200).json({ message: "firm Deleted Successfully" }); // Use 200 OK
        } else {
            res.status(404).json({ error: 'firm not found' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;
