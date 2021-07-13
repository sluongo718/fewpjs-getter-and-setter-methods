// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.pow(this.radius, 2) * Math.PI
    }

    set diameter(thisNumber) {
        this.radius =  thisNumber / 2
    }

    set circumference(thisNum) {
        this.radius = thisNum / 2 / Math.PI
    }

    set area(thisNum) {
            this.radius = Math.sqrt(thisNum / Math.PI)
    }

}
