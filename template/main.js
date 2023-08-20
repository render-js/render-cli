import {init_status} from "muyomu-render-status";
import {RenderJS} from "muyomu-render";
import index from './src/index'

let app = new RenderJS();

init_status({
    type: "session",
    fields:{
        name: "mutian",
        age: 23,
        sex: "male"
    }
})

app.addTag(index)

app.run()