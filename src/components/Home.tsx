import React from 'react';
import Moment from 'react-moment';
import '../Home.css'
import { useSelector } from 'react-redux';

interface Todo {
    id: number,
    title: string,
    message: string,
    createDate: Date
    editDate: Date,
    traitDate: Date

}

const Home = () => {

    const list: Array<Todo> = useSelector((state: any ) => state.task.list)
  

    return (

        <div className='content'>

            <h3 className='title'>Todo List</h3>


            <div className="row">
                <div className="col-8" style={{ margin: "auto" }}>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Titre</th>
                                <th scope="col">Message</th>
                                <th scope="col">Date de creation</th>
                                <th scope="col">Date de modification</th>
                                <th scope="col">Date de traitement</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                list.map((el, id) => (
                                    <tr key={id}>
                                        <th scope="row">{el.id}</th>
                                        <td>{el.title}</td>
                                        <td>{el.message}</td>
                                        <td> <Moment format="DD/MM/YYYY">{el.createDate}</Moment></td>
                                        <td><Moment format="DD/MM/YYYY">{el.editDate}</Moment></td>
                                        <td><Moment format="DD/MM/YYYY">{el.traitDate}</Moment></td>
                                        <td className='actions'>
                                            <a href={`/todolist/details/${el.id}`}>
                                                <button type="button" className="btn btn-outline-success">Voir</button>
                                            </a>
                                            <a href={`todolist/edit/${el.id}`}>
                                                <button type="button" className="btn btn-outline-primary">Modifier</button>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ textAlign: "center" }} >
                <a href={'/todolist/add'}>
                    <button type="button" className="btn btn-success">Créer un todo
                </button>
                </a>
            </div>

        </div>
    );
}
export default Home