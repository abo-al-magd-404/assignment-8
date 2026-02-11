import {
  conflictException,
  NotFoundException,
} from "../../common/utils/response/index.js";
import {
  encrypt,
  compareHash,
  generateHash,
  decrypt,
} from "../../common/utils/security/index.js";
import { userModel, findOne, createOne } from "../../DB/index.js";

export const signup = async (inputs) => {
  const { username, email, password, phone } = inputs;

  const checkUserExist = await findOne({
    model: userModel,
    filter: { email },
  });

  if (checkUserExist) {
    throw conflictException({ message: "Email already exist" });
  }

  const user = await createOne({
    model: userModel,
    data: {
      username,
      email,
      password: await generateHash({
        plaintext: password,
      }),
      phone: await encrypt(phone),
    },
  });

  return user;
};

export const login = async (inputs) => {
  const { email, password } = inputs;

  const user = await findOne({
    model: userModel,
    filter: { email },
    options: {
      lean: true,
    },
  });

  if (!user) {
    throw NotFoundException({ message: "Invalid Login Credentials" });
  }

  if (
    !(await compareHash({ plaintext: password, cipherText: user.password }))
  ) {
    throw NotFoundException({ message: "Invalid Login Credentials" });
  }

  user.phone = await decrypt(user.phone);

  return user;
};
