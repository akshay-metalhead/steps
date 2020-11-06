input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
led.stopAnimation()
basic.forever(function () {
    basic.showNumber(steps)
})
