const bcrypt = require("bcrypt");
const token = require("../../../helpers/token");

module.exports = {
  createUser: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (user) {
      throw new Error("user is already hav.");
    }

    return await new User({
      username,
      password,
    }).save();
  },
  signIn: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("user is not found.");
    }
    
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("password is wrong.");
    }

    return {
      token: token.generate(user, '1hr')
    };
  },
};
