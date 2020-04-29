const Mentor = require('../models/mentors')

function getAll () {
  return Mentor.find()
}

function create (mentorData) {
  return Mentor.create(mentorData)
}

function updateByid (id, newMentorData) {
  return Mentor.findByIdAndUpdate(id, newMentorData)
}

function deleteByid (id) {
  return Mentor.findByIdAndRemove(id)
}

module.exports = {
  getAll,
  create,
  updateByid,
  deleteByid

}
