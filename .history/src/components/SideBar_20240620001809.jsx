import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const selectedCategory = 'New';

const SideBar = () => (
    <Stack
    direction="row"
    sx={{
      overflowY:'auto',
      height:{sx:'auto', md:'95%'},
      flexDirection:{md: 'column'}
    }}>
      {categories.map((category) => (
        <button className="category-button"
        style={{
          background: category.name === selectedCategory
          && '#FC!'
        }}>
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
)

export default SideBar