const Intl = require('intl')
const { age, date } = require('../../lib/utils')
const Member = require('../models/Member')

module.exports = {
    index(req, res){

        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 5
        let offset = limit * ( page - 1 )

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(members) {

                if (members.length > 0) {
                    const pagination = {
                        total: Math.ceil(members[0].total / limit),
                        page
                    }

                    return res.render("members/index", { members, pagination, filter })
                } else {
                    return res.render("members/index")
                }  
            }
        }

        Member.paginate(params)

    },
    create(req, res){

        Member.instructorsSelectOptions(function(options) {
            return res.render("members/create", { instructorOptions: options } )
        })
        

    },
    show(req, res){
        Member.find(req.params.id, function(member) {
            if (!member) return res.send("Hmm, não achei esse membro..")
            
            member.birth = date(member.birth).birthDay

            return res.render("members/show", { member })
        
        })

        return
    },
    post(req, res){

        const keys = Object.keys(req.body)

        for (key of keys) {
            
            if (req.body[key] == "") {
                return res.send(`Por favor, preencha todos os campos`)
            }
        }
        
        Member.create(req.body, function(memberId) {
            return res.redirect(`/members/${memberId}`)
        })
        
        return
        
    },
    edit(req, res){
        
        Member.find(req.params.id, function(member) {
            if (!member) return res.send("Hmm, não achei esse membro..")
            
            member.birth = date(member.birth).iso

            Member.instructorsSelectOptions(function(options) {
                return res.render("members/edit", { member, instructorOptions: options } )
            })
        
        })

        return
    },
    put(req, res){
   
        const keys = Object.keys(req.body)

        for (key of keys) {
            
            if (req.body[key] == "") {
                return res.send(`Por favor, preencha todos os campos`)
            }
        }
    
        Member.update(req.body, function() {
            return res.redirect(`/members/${req.body.id}`)
        })
    },
    delete(req, res){

        Member.delete(req.body.id, function() {
            return res.redirect(`/members`)
        })
    },
}