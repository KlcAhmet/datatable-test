import { InputGroup, FormControl, Form } from 'react-bootstrap';

function Search() {

    return (
        <div className="search">
            <InputGroup className="search__group">
                <FormControl
                    className="search__group__input"
                    id="searchInput"
                    placeholder="Aranacak değeri yazın"
                />
                <InputGroup.Append className="search__group__check">
                    <InputGroup.Text>
                        <fieldset>
                            <Form>
                                <Form.Check
                                    custom
                                    inline
                                    name="groupOptions"
                                    label="All"
                                    type="radio"
                                    id="allRadio"
                                />
                                <Form.Check
                                    custom
                                    inline
                                    name="groupOptions"
                                    label="Capital"
                                    type="radio"
                                    id="capitalRadio"
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Harf Duyarlı"
                                    type="checkbox"
                                    id="harfDuyarli"
                                />
                            </Form>
                        </fieldset>
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default Search