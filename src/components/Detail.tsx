import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';


interface Todo {
    id?: number,
    title?: string,
    message?: string,
    createDate?: Date
    editDate?: Date,
    traitDate?: Date

}


const Detail = () => {

    const [id, setId] = useState<number>(-1);

    useEffect(() => {

        let hrefId = document.location.href.split('/')
        setId(parseInt(hrefId[hrefId.length - 1]))
    },[])

    const todo = useSelector((state: any) => state.task.list.filter((l: Todo) => l.id === id))


    if (todo.length !== 0) {
        return (

            <div className='content'>

                <h3 className='title'>Détails</h3>

                <div className="card" style={{ width: "30%", margin: "auto" }}>
                    <div className="card-body" style={{ textAlign: "center" }}>
                        <div className="form-group mb-2">
                            <label><strong>Titre :</strong></label>
                            <span> {todo[0].title}</span>
                        </div>
                        <div className="form-group mb-2">
                            <label><strong>Message :</strong></label>
                            <span> {todo[0].message}</span>
                        </div>
                        <div className="form-group mb-2">
                            <label> <strong>Date de création : </strong> </label>
                            <span> <Moment format="DD/MM/YYYY">{todo[0].createDate}</Moment></span>
                        </div>
                        <div className="form-group mb-2">
                            <label> <strong>Date de modification : </strong></label>
                            <span> <Moment format="DD/MM/YYYY">{todo[0].editDate}</Moment></span>
                        </div>
                        <div className="form-group mb-2">
                            <label> <strong>Date de traitement :</strong></label>
                            <span> <Moment format="DD/MM/YYYY">{todo[0].traitDate}</Moment></span>
                        </div>
                    </div>
                </div>

            </div>
        );
    } else {
        return (

            <div className='content'>

            </div>
        );

    }

}

export default Detail