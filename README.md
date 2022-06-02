# NewGen Vision Frontend Task
<h2>Task: Selecting Suitable Courses</h2>
<p>Есть подборка курсов, каждый описывается как: <pre>Course = {
  name: string;
  prices: [number | null, number | null];
}</pre>

На вход дается диапазон цен, который описывается как: <pre>PriceRange = {
  prices: [number | null, number | null];
}</pre>

Нужно найти какие курсы попадут в данный диапазон.

</br>
Алгоритм:</br>
1)Предварительно находим значения <code>priceFrom</code>,<code>PriceTo</code>, они будут равны, либо значениям которые пришли, либо если <code>priceFrom === null</code>, то 0, если <code>priceTo === null</code>, то Infinity
</br>
2)Фильтруем массив courses, и на каждом шаге проверяем попадают ли наши значения в диапазон, если <code>prices[0] === null</code>, то присваиваем ему значение 0, а если <code>prices[1] === null</code>, то присваиваем ему значение Infinity
</p>

<h2>Task: Sorting Courses By Price</h2>
<p>Есть подборка курсов, каждый описывается как: <pre>Course = {
  name: string;
  prices: [number | null, number | null];
}</pre>

На вход дается тип сортировки, который описывается как: <pre>TypeOfSorting = "ASC" | "DESC"</pre>

Нужно отсортировать заданный массив.

</br>
Алгоритм:</br>
1)Используем встроенную сортировку с кастомным предикатом, предикат : определяем верхние границы курсов аналогично прошлому заданию и в зависимости от типа сортировки вычитаем их друг из друга
</p>


