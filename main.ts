input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(5)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(0)
})
radio.setGroup(81)
radio.sendNumber(0)
basic.forever(function () {
	
})
