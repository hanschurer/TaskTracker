import React, { Component } from 'react'
import { getMovies } from './fakeMovieService'


export class Movies extends Component {
    state = {
        movies: getMovies()
    }


    handleDelete = movie => {
        const movies=this.state.movies.filter(m=> m._id!==movie._id)
        this.setState({movies})

    };



    render() {

        if(this.state.movies.length===0){
                return <h4>There is no movies in the database</h4>
        }

        return (
            
            <div>
                
                {<h4>Showing {this.state.movies.length} movies in the database</h4>}

                <table className="table">
                    <tr>
                        <th scope='col'>
                            Title
                </th>
                        <th>
                            Genre
                </th>
                        <th>
                            Stock
                </th>
                        <th>
                            Rate
                </th>
                    </tr>
                    {this.state.movies.map(movie => <tr key={movie._id}><td>{movie.title}</td><td>{movie.genre.name}</td><td>{movie.numberInStock}</td><td>{movie.dailyRentalRate}</td> <td> <button onClick={()=>this.handleDelete(movie)} type='button' className='btn btn-danger'>Delete</button> </td></tr>)}
                </table>

            </div>
        )
    }
}

export default Movies
