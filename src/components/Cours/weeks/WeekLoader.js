import React from 'react';
import {A, Groupe, Section, Snippet} from '../../shared';

const WeekLoader = (props) => (
    <section>
    <Section title="Chargement">

        <Groupe title="Lorem ipsum dolor sit amet">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue est ut massa vulputate lobortis eu et dui. Phasellus in iaculis tellus. Sed blandit sodales eleifend. Sed vestibulum id arcu a euismod. Integer pulvinar erat et elit pellentesque fringilla. Fusce non libero arcu. Nunc condimentum ex congue lobortis interdum. Nunc imperdiet ante nisi, id sagittis felis ullamcorper ut. Praesent eu bibendum enim, quis hendrerit justo. Vestibulum ornare faucibus leo a volutpat. Aenean a diam at sem eleifend vestibulum.</p>
            <p>Praesent fringilla nisi euismod nibh pulvinar, et malesuada eros interdum. Nulla imperdiet quis sapien vel dictum. Sed cursus nisi vitae quam rutrum mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus semper neque, quis consectetur felis pulvinar sed. Nunc blandit lectus non diam pellentesque posuere. Pellentesque mattis, lorem ac tristique interdum, purus tellus lobortis erat, sit amet aliquam nulla sem vel nibh. Mauris a dolor blandit turpis pretium maximus. Maecenas bibendum eget dolor in commodo. Integer ornare consequat dolor, vel iaculis magna sodales sed. Donec eu lacus purus. Duis semper augue nec turpis condimentum, facilisis venenatis orci varius. Morbi malesuada sollicitudin eleifend.</p>
        </Groupe>
            <Groupe title="Lorem ipsum dolor sit amet">
                <Snippet language="javascript" code={`
    const history = useHistory();
    const coursItems = createCoursItems();
    let navCoursItem = {label: 'Notes de cours'};
    navCoursItem = coursItems.length <= 1 ? {...navCoursItem, url: '/cours', command: (e) => {redirectWithRouter(e)}} : {...navCoursItem, items: coursItems};

    const navItems = [
        navCoursItem,
        { label: "Travaux", url: '/travaux', command: (e) => {redirectWithRouter(e)}  },
      
                `}/>
            </Groupe>
        <Groupe title="Lorem ipsum dolor sit amet">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue est ut massa vulputate lobortis eu et dui. Phasellus in iaculis tellus. Sed blandit sodales eleifend. Sed vestibulum id arcu a euismod. Integer pulvinar erat et elit pellentesque fringilla. Fusce non libero arcu. Nunc condimentum ex congue lobortis interdum. Nunc imperdiet ante nisi, id sagittis felis ullamcorper ut. Praesent eu bibendum enim, quis hendrerit justo. Vestibulum ornare faucibus leo a volutpat. Aenean a diam at sem eleifend vestibulum.</p>
            <p>Praesent fringilla nisi euismod nibh pulvinar, et malesuada eros interdum. Nulla imperdiet quis sapien vel dictum. Sed cursus nisi vitae quam rutrum mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus semper neque, quis consectetur felis pulvinar sed. Nunc blandit lectus non diam pellentesque posuere. Pellentesque mattis, lorem ac tristique interdum, purus tellus lobortis erat, sit amet aliquam nulla sem vel nibh. Mauris a dolor blandit turpis pretium maximus. Maecenas bibendum eget dolor in commodo. Integer ornare consequat dolor, vel iaculis magna sodales sed. Donec eu lacus purus. Duis semper augue nec turpis condimentum, facilisis venenatis orci varius. Morbi malesuada sollicitudin eleifend.</p>
        </Groupe>
        <Groupe title="Lorem ipsum dolor sit amet">
            <Snippet language="javascript" code={`
    const getLsObj = () => {
        const panelRefs = window.localStorage[lSKeyName];
        return typeof panelRefs === 'undefined' ? null : JSON.parse(panelRefs);
    };

    const setLSPanelRef = (obj, newVal) => {
        const collapsedVal = typeof newVal === 'undefined' ? collapsed : newVal;
        if (typeof obj === 'undefined') {
            window.localStorage.setItem(lSKeyName, JSON.stringify({[panelId] : collapsed ? 1 : 0}));
        } else {
            window.localStorage.setItem(lSKeyName, JSON.stringify({...obj, [panelId] : collapsedVal ? 1 : 0}));
        }
    };

    const togglePanel = e => {
        const newCollapsedVal = !collapsed;
                `}/>
        </Groupe>

        <Groupe title="Lorem ipsum dolor sit amet">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque congue est ut massa vulputate lobortis eu et dui. Phasellus in iaculis tellus. Sed blandit sodales eleifend. Sed vestibulum id arcu a euismod. Integer pulvinar erat et elit pellentesque fringilla. Fusce non libero arcu. Nunc condimentum ex congue lobortis interdum. Nunc imperdiet ante nisi, id sagittis felis ullamcorper ut. Praesent eu bibendum enim, quis hendrerit justo. Vestibulum ornare faucibus leo a volutpat. Aenean a diam at sem eleifend vestibulum.</p>
            <p>Praesent fringilla nisi euismod nibh pulvinar, et malesuada eros interdum. Nulla imperdiet quis sapien vel dictum. Sed cursus nisi vitae quam rutrum mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec finibus semper neque, quis consectetur felis pulvinar sed. Nunc blandit lectus non diam pellentesque posuere. Pellentesque mattis, lorem ac tristique interdum, purus tellus lobortis erat, sit amet aliquam nulla sem vel nibh. Mauris a dolor blandit turpis pretium maximus. Maecenas bibendum eget dolor in commodo. Integer ornare consequat dolor, vel iaculis magna sodales sed. Donec eu lacus purus. Duis semper augue nec turpis condimentum, facilisis venenatis orci varius. Morbi malesuada sollicitudin eleifend.</p>
        </Groupe>
        </Section>
    </section>);

export default WeekLoader;
