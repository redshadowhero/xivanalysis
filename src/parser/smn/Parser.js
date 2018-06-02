import CoreParser from 'parser/core/Parser'

import About from './modules/About'
import Bahamut from './modules/Bahamut'
import DoTs from './modules/DoTs'
import DWT from './modules/DWT'
import Gauge from './modules/Gauge'
import Pets from './modules/Pets'
import Ruin2 from './modules/Ruin2'
import Ruin4 from './modules/Ruin4'

class Parser extends CoreParser {
	static jobModules = {
		about: About,
		bahamut: Bahamut,
		dots: DoTs,
		dwt: DWT,
		gauge: Gauge,
		pets: Pets,
		ruin2: Ruin2,
		ruin4: Ruin4
	}
}

export default Parser
