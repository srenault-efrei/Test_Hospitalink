import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

interface Todo {
    id: number,
    title: string,
    message: string,
    createDate: Date
    editDate: Date,
    traitDate: Date

}


const Form = () => {
    const [id, setId] = useState<number>(-1);


    let title: string = useSelector((state: any) => state.form.simple?.values?.title)
    let message: string = useSelector((state: any) => state.form.simple?.values?.message)
    let lastId: number = useSelector((state: any) => state.task.list[state.task.list.length - 1].id)
    let history = useHistory();
    const todo = useSelector((state: any) => state.task.list.filter((l: Todo) => l.id === id))


    const dispatch = useDispatch()

    useEffect(() => {

        let location = document.location.href.split('/')
        if (location[location.length - 1] !== "add") {
            setId(parseInt(location[location.length - 1]))
        }
    },[])

    const addTodo = () => {

        dispatch({ type: "CREATE", payload: { id: lastId + 1, title, message, createDate: new Date(), editDate: new Date(), traitDate: new Date() } })
        history.push('/')
    }

    const editTodo = () => {

        // dispatch({ type: "UPDATE", payload: { id, title, message, createDate: new Date(), editDate: new Date(), traitDate: new Date() } })
        history.push('/')
    }

    return (

        <div className='content'>
            <div className='container'>

                {
                    id === -1 ? <h3 className='title'>Nouveau</h3> : <h3 className='title'>Modification</h3>
                }

                <form>
                    <div className="form-group">
                        <label>Titre</label>
                        {
                            id === -1 ? <Field className="form-control" name="title" component="input" type="text" placeholder="Entrer un titre" />
                                : todo.length !== 0 ? <Field className="form-control" name="title" component="input" type="text" placeholder={todo[0].title} /> :
                                    <span></span>
                        }
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        {
                            id === -1 ? <Field className="form-control" name="message" component="input" type="textarea" placeholder="Entrer un message" />
                                : todo.length !== 0 ? <Field className="form-control" name="message" component="input" type="textarea" placeholder={todo[0].message} /> :
                                    <span></span>
                        }

                    </div>
                    {
                        id === -1 ?
                            <button type="submit" className="btn btn-success" onClick={addTodo}>Ajouter
                </button>

                            : <a href={'/'}>
                                <button type="submit" className="btn btn-success" onClick={editTodo}>Modifier
                    </button>
                            </a>
                    }
                </form>
            </div>
        </div>
    );
}

export default reduxForm({
    form: 'simple'
})(Form)