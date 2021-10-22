controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    if (info.score() > 40) {
        game.over(true)
    } else {
        game.over(false)
    }
})
scene.setBackgroundColor(1)
game.splash("BUTTON CLICKER", "Press A to play!")
info.startCountdown(10)
