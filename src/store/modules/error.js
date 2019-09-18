import {ToastProgrammatic as Toast} from 'buefy'

const actions = {
    handleError: async ({}, error) => {
        if (error.error) {
            Toast.open({
                duration: 2000,
                queue: false,
                message: error.error,
                position: 'is-bottom',
                type: 'is-danger'
            })
        } else {
            Toast.open({
                duration: 2000,
                queue: false,
                message: error.status,
                position: 'is-bottom',
                type: 'is-danger'
            });
        }
    },

    handleSuccessfulAction: async ({}, message) => {
        Toast.open({
            duration: 2000,
            queue: false,
            message: message,
            type: 'is-success'
        });
    }
};

export default {
    actions
}