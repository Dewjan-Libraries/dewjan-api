import { Schema , model} from "mongoose";

const authorModel = new Schema ({
    firstName: {type: String, requiured: true},
    lastName: {type: String, requiured: true},
    bio: {type: String, requiured: true},
})

export const AuthorModel = model ("Author", authorModel)
                                                   