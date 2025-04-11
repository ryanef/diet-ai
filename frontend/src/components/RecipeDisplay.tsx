import {use, useEffect, useState} from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton  from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme }) => ({
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
//   variants: [
//     {
//       props: ({ expand }) => !expand,
//       style: {
//         transform: 'rotate(0deg)',
//       },
//     },
//     {
//       props: ({ expand }) => !!expand,
//       style: {
//         transform: 'rotate(180deg)',
//       },
//     },
//   ],
// }));

interface Recipes {
  benefits: string;
  title: string;
  description: string;
}

export default function RecipeDisplay({recipes}: {recipes: Promise<Recipes[] | null>}){
    // const recipes = [{title: "title", description: "desc","benefits": "b", success: true}]
    const [recipeData, setRecipeData] = useState<Recipes[] | null>(null)
    // const [expanded, setExpanded] = useState(false);

    const useData = use(recipes)

    useEffect(()=>{
      if(useData){
     
        console.log(useData)
    
        setRecipeData(useData)
      }
    }, [useData])

  

    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };
        
    console.log("use recipe use use use")
    console.log(recipeData)
    return (
        <>
        {recipeData?.map((recipe, index)=>{
            return (
                <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {index+1}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={recipe.title}
                />
                <CardContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <h4>Description</h4>
                    {recipe.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <h4>Benefits:</h4>
                    {recipe.benefits}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>

                </CardActions>
              </Card>
            )
        })}
            </>
    )
}