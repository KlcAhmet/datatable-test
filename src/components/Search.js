import { Col, InputGroup, FormControl, Form } from 'react-bootstrap';

function Search() {

    return (
        <div className="mb-3">
            <InputGroup>
                <FormControl
                    placeholder="Aranacak değeri yazın"
                />
                <InputGroup.Append>
                    <InputGroup.Text>
                        <fieldset>
                            <Form>
                                <Form.Check
                                    custom
                                    inline
                                    label="All"
                                    type="radio"
                                    id="allRadio"
                                />
                                <Form.Check
                                    custom
                                    inline
                                    label="Capital"
                                    type="radio"
                                    id="capitalRadio"
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