import "aframe";

AFRAME.registerComponent("moves", {
    schema: {},
    init: function () {
        this.motion = new THREE.Vector3(0, 0, 0);
    },
    tick: function (time, timeDelta) {
        this.motion.z -= timeDelta * 0.0001;
        let pos = this.el.getAttribute("position");
        pos.x += this.motion.x;
        pos.y += this.motion.y;
        pos.z += this.motion.z;
        this.el.setAttribute("position", pos);
    }
});
