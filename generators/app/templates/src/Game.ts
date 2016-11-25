namespace <%= namespace %> {

    export class Game extends Phaser.Game {

        constructor() {
            super(800, 600, Phaser.AUTO);

            this.state.add("Boot", <%= namespace %>.Boot);
            this.state.add("Preloader", <%= namespace %>.Preloader);
            this.state.add("Main", <%= namespace %>.Main);

            this.state.start("Boot");
        }
    }
}
