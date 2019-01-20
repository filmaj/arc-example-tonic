import Tonic from './tonic.mjs';
export default class App extends Tonic {
    render () {
        return `<p>Hello World</p>`;
    }
}
Tonic.add(App);
