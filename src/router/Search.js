import React from 'react'
import Autocomplete from './AutoCompleteText'

class Search extends Comment {
    render() {
        return (
            <div>
                <Autocomplete
                    suggestions={[
                        "Alligator",
                        "Bask",
                        "Crocodilian",
                        "Death Roll",
                        "Eggs",
                        "Jaws",
                        "Reptile",
                        "Solitary",
                        "Tail",
                        // 여기에 유저 name을 넣어야 하는데 ㅠ
                    ]}
                />
            </div>


        );
    }
}
const search = new Search();


export default search;