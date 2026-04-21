input.onGesture(Gesture.EightG, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(60, -50)
    basic.pause(500)
    wuKong.stopAllMotor()
    wuKong.setAllMotor(0, -50)
    basic.pause(500)
    wuKong.stopAllMotor()
    wuKong.setAllMotor(60, -25)
    basic.pause(500)
    wuKong.stopAllMotor()
})
input.onGesture(Gesture.FreeFall, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.TiltLeft, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.SixG, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Giraffe)
})
input.onGesture(Gesture.ScreenUp, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.ScreenDown, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.TiltRight, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.ThreeG, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showIcon(IconNames.Sad)
})
