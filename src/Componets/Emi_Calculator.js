import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

const Emi_Calculator = () => {
  const [loanValue, setLoanValue] = useState(1000);
  const [intrest, setIntrest] = useState(2);
  const [loanTenture, setLoanTenture] = useState(1);
  const [emi,setEmi] = useState(0)


 
  
  

 const handleEmi = (e)=>{
  e.preventDefault();
  setEmi(Math.round((loanValue * intrest/12) * [(1 + intrest/12)^loanTenture] / [(1 + intrest/12)^ loanTenture - 1]))
 }
  

  return (
    <main>
      <Container className="mx-auto py-5">
        <Row>
          <Col>
            <div className="w-100 w-lg-50 mx-auto px-4 py-5 bg-dark rounded">
            <h3 className="mb-4 text-white">Emi_Calculator</h3>

            <Form onSubmit={handleEmi}>
              <Form.Group className="d-block mb-5"> 
                  <Form.Label className="w-100 text-white">Loan Amount (Rupees)</Form.Label>
                 
                  <RangeSlider
                    className="w-100 mb-4"
                   
                    value={loanValue}
                    max={10000000}
                    min={10000}
                    tooltip='on'
                    tooltipPlacement="top"
                    tooltipLabel={value=> `${value}₹`}
                    step={1000}
                    onChange={(e) => setLoanValue(e.target.value)
                    }
                    variant='light'
                  />
                <Form.Control
                    type="number"
                    max={10000000}
                    min={10000}
                    step={1000}
                    value={loanValue}
                    onChange={(e) => setLoanValue(e.target.value)}
                    
                  />
                
            </Form.Group>
            <Form.Group className="d-block mb-5"> 
                  <Form.Label className="w-100 text-white">Intrest Rate (Percentage)</Form.Label>
                  <RangeSlider
                  className="w-100 mb-4"
                    value={intrest}
                    max={20}
                    min={0}
                    tooltip='on'
                    tooltipPlacement="top"
                    tooltipLabel={value=> `${value}%`}
                    step={1}
                    onChange={(e) => setIntrest(e.target.value)}
                    variant='light'
                  />
                <Form.Control
                    type="number"
                    max={20}
                    min={0}
                    value={intrest}
                    onChange={(e) => setIntrest(e.target.value)}
                  />
                
            </Form.Group>
            <Form.Group className="d-block mb-0"> 
                  <Form.Label className="w-100 text-white">Loan Tenture (Months)</Form.Label>
                  <RangeSlider
                  className="w-100 mb-4"
                    value={loanTenture}
                    max={36}
                    min={0}
                    tooltip='on'
                    tooltipPlacement="top"
                    step={1}
                    onChange={(e) => setLoanTenture(e.target.value)}
                    variant='light'
                  />
                <Form.Control
                    type="number"
                    max={36}
                    min={0}
                    value={loanTenture}
                    onChange={(e) => setLoanTenture(e.target.value)}
                  />
                
            </Form.Group>
           
              <Button type="submit" className="my-5"  variant="light">Calculate EMI</Button>
            
         
              
            </Form>
              <h2 className="text-white">Payable EMI for the Loan Amount :{emi} Rupees</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Emi_Calculator;
