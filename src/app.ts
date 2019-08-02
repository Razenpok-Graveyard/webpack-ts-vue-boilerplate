import Vue from "vue";
import Hello from "./components/Hello.vue";

const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

const vue = new Vue({
    el: "#app",
    template: "<hello/>",
    components: {
        Hello
    }
});

// Just so TSC could let us compile this file
// eslint-disable-next-line no-empty-function
vue.$nextTick(() => {});
