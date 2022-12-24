const { Schema, model } = require("mongoose");

const formSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 4,
    maxLength: 128,
  },
  description: {
    type: String,
    minLength: 4,
    maxLength: 256,
  },
  type: {
    type: String,
    require: true,
    enum: ["single-page", "page-by-page"],
  },
  backPrevQuestion: {
    type: Boolean,
    default: false,
  },
  start: {
    type: Date,
    default: Date.now,
  },
  expired: {
    type: Date,
  },
  randomQuestion: {
    type: Boolean,
    default: false,
  },
  question: [
    {
      title: {
        type: String,
        require: true,
        minLength: 4,
        maxLength: 128,
      },
      description: {
        type: String,
        minLength: 4,
        maxLength: 256,
      },
      type: {
        type: String,
        require: true,
        enum: [
          "multiple-choice",
          "descriptive",
          "short-answer",
          "true-false",
          "file",
        ],
      },
      fileType: {
        type: String,
        enum: ["pdf", "word", "image", "excel", "powerpoint"],
      },
      mandatory: {
        type: Boolean,
        default: false,
      },
      answer: [
        {
          title: {
            type: String,
            maxLength: 128,
          },
          correct: {
            type: Boolean,
          },
          filePath: {
            type: String,
          },
        },
      ],
    },
  ],
});

module.exports = model("Form", formSchema);
