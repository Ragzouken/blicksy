/**
 * @typedef {Object} BlicksyDataLocation
 * @property {string} room
 * @property {Vector2} position
 */

/**
 * @typedef {Object} BlicksyDataGraphic
 * @property {string} id
 * @property {string} name
 * @property {string} data
 */

/**
 * @typedef {Object} BlicksyDataObjectBehaviour
 * @property {string} dialogue
 * @property {string} destination
 * @property {string} script
 */

/**
 * @typedef {Object} BlicksyDataObject
 * @property {string} id
 * @property {string} name
 * @property {string} graphic
 * @property {BlicksyDataLocation} location
 * @property {BlicksyDataObjectBehaviour} behaviour
 */

/**
 * @typedef {Object} BlicksyTileBlock
 * @property {Vector2} position
 * @property {string[]} tileset
 * @property {number[][]} tiles
 */

/**
 * @typedef {Object} BlicksyDataRoom
 * @property {string} id
 * @property {string} name
 * @property {BlicksyTileBlock[]} tileblocks
 * @property {BlicksyDataObject[]} objects
 */

/**
 * @typedef {Object} BlicksyDataProjectDetails
 * @property {string} id
 * @property {string} name
 * @property {string[]} palette
 */

/**
 * @typedef {Object} BlicksyPlayState
 * @property {string} room
 * @property {Vector2} position
 * @property {Object} variables
 */

/**
 * @typedef {Object} BlicksyDataProject
 * @property {BlicksyDataProjectDetails} details
 * @property {BlicksyDataGraphic[]} graphics
 * @property {BlicksyDataRoom[]} rooms
 * @property {BlicksyPlayState} state
 */

/** @type {BlicksyDataProject} */
const EMPTY_PROJECT_DATA = {
    details: {
        id: "EMPTY.PROJECT",
        name: "empty project",
        palette: [
            "#b15dcc",
            "#fbc8ff",
            "#ffffff"
        ]
    },
    graphics: [
        {
            id: "graphic:0",
            name: "wall",
            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAADJJREFUGJWFj0EKADAMwnT0/1/OLjts0LrchIhoACWSALBiW9IjcBiFjrqDbceJDv9ubuJqF/v3rWb/AAAAAElFTkSuQmCC"
        },
        {
            id: "graphic:1",
            name: "avatar",
            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAADVJREFUGJWFjrENADAIwxL+/zld2sqw4AmIQUggF85KC6tgnm+B7S/MkFIlybNn2BbZsF6fPDmbH/sEFaZxAAAAAElFTkSuQmCC" 
        },
        {
            id: "graphic:2",
            name: "cat",
            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAC5JREFUGJVjYKAK+P///39kGlmcCV0ROmDCJgjTwMjIyMiISzdMjgmZQ5RD0dkAejkf9GTG1zIAAAAASUVORK5CYII=" 
        }
    ],
    rooms: [
        {
            id: "room:0",
            name: "unnamed room",
            tileblocks: [
                { 
                    position: { x: 0, y: 0 },
                    tileset: [null, "graphic:0"],
                    tiles: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
                        [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ]
                }
            ],
            objects: []
        }
    ],
    state: {
        room: "0",
        position: { x: 0, y: 0 },
        variables: {}
    }
}