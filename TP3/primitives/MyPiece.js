/**
 * MyPiece
 * @constructor
 * @param {CGFscene} scene - Reference to MyScene object
 * @param {MyTile} tile - tile which holds piece
 */
class MyPiece extends CGFobject {
    constructor(scene, obj, tile) {
        // Move this to different classes?
        super(scene);
        this.tile = tile //pointer to holding tile
        this.obj = obj;
        this.selected = false;
    }

    getTile() {return this.tile;}

    setTile(tile) {this.tile = tile;}

    setObj(obj) {this.obj = obj;}

    registerForPick() {
        let [col, line] = this.getTile().getCoords();
        let gameboard = this.getTile().gameboard;
        this.scene.registerForPick(col + line * gameboard.length, this);
    }

    display() {
        this.registerForPick();
        //TODO Use matrices instead of scene.scale
        if (this.selected)
            this.scene.scale(1.5, 1.0, 1.5);
        this.obj.display();
        if (this.selected)
            this.scene.scale(1.0 / 1.5, 1.0, 1.0 / 1.5);
    }

    toString() {
        return this.isBlack ? "0" : "1";
    }
}

