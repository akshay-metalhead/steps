input.onButtonPressed(Button.A, function () {
    steps = 0
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0
led.stopAnimation()
basic.forever(function () {
    basic.showNumber(steps)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
    }
})
