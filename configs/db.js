const { connect } = require("mongoose");

const connectDataBase = async () => {
  try {
    const con = await connect(process.env.MONGOOSE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(`DB connection error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDataBase;
