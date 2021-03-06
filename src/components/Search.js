import { InputGroup, FormControl, Form } from 'react-bootstrap';

function Search() {

    return (
        <div className="mb-3">
            <InputGroup>
                <FormControl
                    id="searchInput"
                    placeholder="Aranacak değeri yazın"
                />
                <InputGroup.Append>
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