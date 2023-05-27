import Pet from './Pet';

const Results = ({pets}) =>  {
    return (
        <div className = 'search'>
            {
            !pets.length? (<h3>No pets found</h3>) 
            : (
                pets.map((pet) =>
                (<Pet {...pet} key = {pet.id}/>)))
            } 
        </div>
    )
}

export default Results;