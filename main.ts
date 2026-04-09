//% color=#0fbc11 icon="\uf2db" block="DRV8871 Motor"
namespace DRV8871Motor {
    /**
     * Aktivér motordriveren
     */
    //% block="Aktivér DRV8871 driver"
    export function init(): void {
        led.enable(false)
    }

    /**
     * Motor A fremad
     */
    //% block="Motor A fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorAForward(speed: number): void {
        pins.analogWritePin(AnalogPin.P12, speed)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }

    /**
     * Motor A baglæns
     */
    //% block="Motor A baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorABackward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P13, speed)
    }

    /**
     * Stop motor A
     */
    //% block="Stop motor A"
    export function stopMotorA(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }

    /**
     * Motor B fremad
     */
    //% block="Motor B fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBForward(speed: number): void {
        pins.analogWritePin(AnalogPin.P14, speed)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Motor B baglæns
     */
    //% block="Motor B baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorBBackward(speed: number): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.analogWritePin(AnalogPin.P15, speed)
    }

    /**
     * Stop motor B
     */
    //% block="Stop motor B"
    export function stopMotorB(): void {
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Stop begge motorer
     */
    //% block="Stop begge motorer"
    export function stopBothMotors(): void {
        stopMotorA()
        stopMotorB()
    }

    /**
     * Begge motorer fremad
     */
    //% block="Begge motorer fremad med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsForwardSameSpeed(speed: number): void {
        motorAForward(speed)
        motorBForward(speed)
    }

    /**
     * Begge motorer baglæns
     */
    //% block="Begge motorer baglæns med speed %speed"
    //% speed.min=0 speed.max=1023
    export function motorsBackwardSameSpeed(speed: number): void {
        motorABackward(speed)
        motorBBackward(speed)
    }
}
