import './home.css'

function Box(props) {
	var title = props.title
	var link = props.link
	var text = props.text
	return (
		<div className='col-3'>
			<div className='flip-box'>
				<div className='flip-box-inner'>
					<div className='flip-box-front'>
						{title}
					</div>
					<div className='flip-box-back'>
						<div>
							<div className='backText'>
								{text}
							</div>
							<br />
							<a
								href={`${link}`}
								target='_blank'
								rel='noreferrer'
								className='viewLink'
							>
								View
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export function Home() {
	return (
		<div className='middle'>
			<div className='row'>
				<Box
					title='Sorting Algorithms (Arrays)'
					link='https://namitkashi.github.io/Sorting_Visualizer/'
					text='Visualization of various sorting algorithms like QuickSort, MergeSort, BubbleSort..'
				/>
				
				<Box
					title='N-Queen Problem (Backtracking)'
					link='https://namitkashi.github.io/nqueen/'
					text='Visualization of N-Queen problem using backtracking'
				/>
				<Box
					title='Text Editor With Auto Suggestion (Tries, Graphs, HashMaps)'
					link='https://namitkashi.github.io/Text_Editor_Auto_Suggestion/'
					text='A text editor that also provides suggestion based on previous text entered by the user. Data Structures used Tries, Maps, Graphs.'
				/>
				
			</div>
		</div>
	)
}
