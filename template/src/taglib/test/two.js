import template from "../../board/test/two.html"
import {Component} from "muyomu-render/class/component";

export default new Component({
    name: "two",
    template: template,
    data:{
        hello: "yes, your father"
    },
    methods:{
        yes(age){
            this.hello = age;
        }
    }
})