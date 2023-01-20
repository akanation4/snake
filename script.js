new Vue({
    el: '#app',

    // Game data
    data: {
        stage_side_length: 10,

        snake: {

            // Sanake head position(initial value)
            head_pos: {
                x: 1,
                y: 3,
            },
        },
    },

    // Game initialization
    created() {

    },

    // Action triggered by changes in data/computed
    watch: {

    },

    // Status based on data
    computed: {

        // Number of cells in the stage(=100)
        stage_cells_count() {
            return this.stage_side_length * this.stage_side_length
        },

        // Index of the snake head cell
        snake_head_index() {
            return this.snake.head_pos.y * this.stage_side_length + this.snake.head_pos.x
        }
    },

    // Methods to change data
    methods: {

    },
})
