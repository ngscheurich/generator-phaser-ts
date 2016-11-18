namespace <%= namespace %> {

    export class Start extends Phaser.State {

        create() {
            const lines = [
                "PhaserOS/086DX Rel. 2.6.1",
                "Copyright (c) Photon Research 1959-1983",
                "All Rights Reserved.",
                "",
                "Welcome, <%= userName %>."
            ];

            const textStyle = {
                fill: "#FFFFFF",
                font: "px437_ati_8x16regular",
                fontSize: "24px"
            };

            let y = 20;
            for (const line of lines) {
                this.game.add.text(20, y, line, textStyle);
                y += 26;
            }
        }
    }
}
