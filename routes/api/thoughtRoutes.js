const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

//  /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
