import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';


class App extends Component {
    render () {
        const menuItems = [
            {href: "/", title: "General"},
            {href: "/about", title: "About"},
            {href: "/service", title: "Service"},
            {href: "/contacts", title: "Contacts"}
        ]

        return <div>
            <h1>First project on React</h1>
            <p>Hello React!</p>
            <Menu titleMenu="Основное меню сайта" items={menuItems} />
        </div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));