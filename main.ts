// This is to be triggered when the radio is transmitted to this micro:bit
radio.onReceivedNumber(function (receivedNumber) {
    alarmOn = true
    receivedRadio = receivedNumber
    // This plays alarm only when the alarmOn variable is true.
    while (alarmOn == true) {
        music.playMelody("A F A F A F A F ", 500)
    }
})
// This is button is for viewing the broadcast and shutting the alarm down
input.onButtonPressed(Button.A, function () {
    // If statement: If the transmissions did arrived before pressing the button, it will execute the next sequence. Else it will show an error screen.
    if (alarmOn == true) {
        // Set this off to turn off an annoying alarm.
        alarmOn = false
        // Setting this on will tell a state of broadcast
        broadcastOn = true
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 240)
        basic.pause(2000)
        // Query for broadcasting (Could be customised and all as much as you want, as long as the micro:bit storage is not full)
        if (receivedRadio == 0) {
            basic.showString("THIS IS A TEST FOR THE EMERGENCY RADIO TRANSMISSION SYSTEM, NO ACTION NEEDED.", 60)
        } else if (receivedRadio == 1) {
            basic.showString("TYPHOON HAZARD WARNING, SHELTER YOURSELF AND KEEP THIS MICROBIT BATTERY-POWERED AND WITH YOU FOR FURTHER UPDATES.", 75)
        } else if (receivedRadio == 2) {
            basic.showString("FLASH FLOOD WARNING, STAY ON HIGH GROUNDS, GET NECESSARY FOOD SUPPLIES AND KEEP THIS MICROBIT BATTERY-POWERED AND WITH YOU FOR FURTHER UPDATES.", 75)
        } else if (receivedRadio == 3) {
            basic.showString("CIVIL DANGER WARNING, SHELTER YOURSELF NOW TO AVOID ANY DANGER AND KEEP THIS MICROBIT BATTERY-POWERED AND WITH YOU FOR FURTHER UPDATES.", 75)
        } else if (receivedRadio == 4) {
            basic.showString("CIVIL DANGER WARNING, EVACUATION IS ADVISED FOR THIS AREA OR SHELTER IN YOUR AREA, AND DON'T FORGET BRING THIS MICROBIT BATTERY-POWERED AND WITH YOU FOR FURTHER UPDATES.", 75)
        } else if (receivedRadio == 5) {
            basic.showString("MANDATORY EVACUATION ORDER. EVACUATE THIS AREA NOW, THIS IS MANDATORY AND THE VIOLATION OF THIS ORDER COULD RESULT IN CERTAIN DEATH OR EXTREME INJURY. BRING THIS MICROBIT BATTERY-POWERED AND WITH YOU FOR FURTHER UPDATES.", 75)
        } else if (receivedRadio == 6) {
            basic.showString("NUCLEAR ATTACK IMMINENT, PEOPLE WITHIN THE RADIUS OF 10 KILOMETRES IS TO EVACUATE NOW OR DEATH IS IMMINENT. PEOPLE WITHIN THE 150 KILOMETRES OF THE CITY CENTRE MUST BUILD THEIR FALLOUT SHELTER, WITH THE SHELTER CLOSING ALL OF THE AIR ENTRANCES, NOW IN CASE THE FALLOUT ARE ARRIVING. BRING THIS MICROBIT BATTERY-POWERED AND WITH YOU FOR FURTHER UPDATES.", 75)
        } else if (receivedRadio == 7) {
            basic.showString("FALLOUT ARRIVING TO YOUR AREA. IF YOU ARE RECEIVING THIS MESSAGE, GO TO YOUR FALLOUT SHELTER NOW. EVACUATION IS TOO LATE. IF THERE IS NO DESIGNATED AREA FOR THE FALLOUT SHELTER, BLOCK ALL OF THE WINDOWS AND VENTILATION SHAFT WITH AS MUCH AS THICKNESS AS POSSIBLE. BRING THIS MICROBIT BATTERY-POWERED AND WITH YOU FOR FURTHER UPDATES.", 75)
        } else {
            basic.showString("ALL CLEAR, YOU MAY CONTINUE YOUR LIVES AS NORMAL, RELIEF TEAM MIGHT BE SENT TO YOU IF YOU ARE IN THE AFFECTED AREA.", 75)
        }
        music.playMelody("A A - A A - A A ", 120)
        // Set off the broadcastOn because the broadcast has ceased.
        broadcastOn = false
    } else {
        // Error 758: No transmission.
        basic.showString("No alarm to be broadcasted as of now. (Error 758)")
        for (let index = 0; index < 4; index++) {
            music.playMelody("B C5 C E A C5 G A ", 240)
        }
    }
})
// This is to open the radio antennas to the transmissions, DO THIS BEFORE THE TRANSMITTER MICRO:BIT
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("READY FOR RECEIVING MESSAGES")
})
// This is the start sequence that sets all of the transmissions state into the boolean.
let receivedRadio = 0
let broadcastOn = false
let alarmOn = false
alarmOn = false
broadcastOn = false
// Specific to the micro:bit version 2
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
})
