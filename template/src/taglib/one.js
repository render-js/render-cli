import template from "../board/one.html"
import {Component} from "muyomu-render/class/component";
import {status_read} from "muyomu-render-status";

export default new Component({
    name: "one",
    template: template,
    data:{
        name: status_read({type:"session",fields:["name"]})['name']
    },
    methods:{
        test(){
            this.$publish("yes",23)
        }
    }
})