fwdSensors.touch.fwdOnTouch(jacdac.ButtonEvent.Down, function () {
    fwdMotors.middleServo.fwdSetSpeed(0)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CCW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})
fwdSensors.dial1.fwdOnDialTurned(fwdSensors.DialDirection.CW, function (difference) {
    fwdMotors.middleServo.fwdSetSpeed(-50)
})
