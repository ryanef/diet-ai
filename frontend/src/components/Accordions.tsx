import  { useState} from 'react';
import Fruit from './food/Fruits';
import Meat from './food/Meat';
import Vegetables from './food/Vegetables';
import Grains from './food/Grains';
import Fish from './food/Fish';
import Spices from './food/Spices';
import Cheese from './food/Cheese';
import NutsSeedsLegumes from './food/NutsSeedsLegumes';
import Pasta from './food/Pasta';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Conditions from './Conditions';
import Milk from './food/Milk';


export default function Accordions(){

    const [expanded, setExpanded] = useState<string | false>('conditions_panel');
    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
 

    return (
      <>
        <Accordion expanded={expanded === 'conditions_panel'} onChange={handleChange('conditions_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="conditions"
            id="medical_conditions"
        >
        <Typography component="span">Medical Conditions</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Conditions/>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'meat_panel'} onChange={handleChange('meat_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="meat"
            id="meat"
        >
        <Typography component="span">Meats</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Meat/>
        </AccordionDetails>
        </Accordion>
        <Accordion  expanded={expanded === 'pasta_panel'} onChange={handleChange('pasta_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="pasta"
            id="pasta"
        >
        <Typography component="span">Pasta</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Pasta/>
        </AccordionDetails>
        </Accordion>

        <Accordion  expanded={expanded === 'fish_panel'} onChange={handleChange('fish_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="fish"
            id="fish"
        >
        <Typography component="span">Fish</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Fish/>
        </AccordionDetails>

        </Accordion>

        <Accordion expanded={expanded === 'vegetable_panel'} onChange={handleChange('vegetable_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="vegetables"
            id="vegetables"
        >

        <Typography component="span">Vegetables</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Vegetables/>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'grains_panel'} onChange={handleChange('grains_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="grains"
            id="grains"
        >
        <Typography component="span">Grains</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Grains/>
        </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'fruits_panel'} onChange={handleChange('fruits_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="fruits"
            id="fruits"
        >
        <Typography component="span">Fruits</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <Fruit/>
        </AccordionDetails>
        
        </Accordion>

        <Accordion expanded={expanded === 'nuts_seeds_panel'} onChange={handleChange('nuts_seeds_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="nuts-seed-beans"
            id="nuts"
        >
        <Typography component="span">Nuts, Seed, Beans</Typography>
        </AccordionSummary>

        <AccordionDetails>
            <NutsSeedsLegumes/>
        </AccordionDetails>
        </Accordion>

        <Accordion  expanded={expanded === 'cheese_panel'} onChange={handleChange('cheese_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="cheese"
            id="cheese"
        >
        <Typography component="span">Cheese</Typography>
        </AccordionSummary>

        <AccordionDetails> 
            <Cheese/>
        </AccordionDetails>
        
        </Accordion>
        <Accordion  expanded={expanded === 'milk_panel'} onChange={handleChange('milk_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="milk"
            id="milk"
        >
        <Typography component="span">Milk</Typography>
        </AccordionSummary>

        <AccordionDetails> 
            <Milk/>
        </AccordionDetails>
        
        </Accordion>
        <Accordion  expanded={expanded === 'spices_panel'} onChange={handleChange('spices_panel')}>
        <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="spices"
            id="spices"
        >
        <Typography component="span">Spices</Typography>
        </AccordionSummary>

        <AccordionDetails> 
            <Spices/>
        </AccordionDetails>
        </Accordion>
  
      </>
    )
  }