import { combineReducers } from "redux";
import { OemBrandReducer } from './OemBrandReducer'
import { CategoryReducer } from './CategoryReducer'
import { OemModelReducer } from './OemModelReducer'
import { SchemeReducer } from './SchemeReducer'
import { SubCategoryReducer } from './SubcategoryReducer'
import { SegmentReducer } from './SegmentReducer'
import { BatteryModelReducer } from './BatteryModelReducer'
import { BatteryBrandReducer } from './BatteryBrandReducer'
import { GroupReducer } from './GroupReducer'
import { SecondryNameReducer } from './SecondryNameReducer'


const Reducer = combineReducers({
    CreateOemBrand: OemBrandReducer,
    CreateCategory: CategoryReducer,
    CreateOemModel: OemModelReducer,
    CreateScheme: SchemeReducer,
    CreateSubCategory: SubCategoryReducer,
    CreateSegment: SegmentReducer,
    CreateBatteryModel: BatteryModelReducer,
    CreateBatteryBrand: BatteryBrandReducer,
    CreateGroupReducer: GroupReducer,
    CreateSecondaryName: SecondryNameReducer
});

export default Reducer;