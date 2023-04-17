const Encounter = require('../models/encounter')

module.exports = {
    // getEncounter: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         //Do we want to grab all the encounters?
    //         const Encounters = await Encounter.find({userId:req.user.userId})
    //         //How can we grab our logged in users encounters?
    //         const encounterItems = await Encounters.countDocuments({userId:req.user.userId,completed: false})
    //         res.render('/encounters', {encounters: encounterItems, left: itemsLeft, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    getEncounter: async (req, res) => {
        try {
            console.log(req.user);
          const encounters = await Encounter.find({ userId: req.user.userId });
          res.json(encounters);
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: 'Server error' });
        }
      },
    
    
    createEncounter: async (req, res) => {
        try {
          await Encounter.create({
            creature: req.body.creature,
            completed: req.body.completed,
            challenge: req.body.challenge
          });
        //   console.log(req.body)
          console.log('Encounter has been added!');
          res.redirect('/encounters');
        } catch (err) {
          console.log(err);
        }
      },
    markComplete: async (req, res)=>{
        try{
            await Encounter.findOneAndUpdate({_id:req.body.encounterIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.encounterIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteEncounter: async (req, res)=>{
        console.log(req.body.encounterIdFromJSFile)
        try{
            await Encounter.findOneAndDelete({_id:req.body.encounterIdFromJSFile})
            console.log('Deleted Encounter')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    