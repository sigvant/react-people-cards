import React from 'react'
import Person from './Person'
import '../App.css';

function PersonList() {
    const people = [
        {
            img: 22, name: 'John', job: 'developer'
        },
        {
            img: 34, name: 'Peter', job: 'designer'
        },
        {
            img: 56, name: 'Thomas', job: 'artist'
        },
    ]
    return (
        <section>
            {
                people.map((person, index) => (
                    <Person
                        key={index}
                        img={person.img}
                        name={person.name}
                        job={person.job}
                    />
                ))
            }
        </section>
    )
}

export default PersonList
