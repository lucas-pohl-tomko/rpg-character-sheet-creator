import { https } from './config'

export default {
    
    list:() => {
        return https.get('')
    }

}